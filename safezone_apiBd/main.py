from fastapi import FastAPI, HTTPException
from models import Usuario
from database import get_connection

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Libera o frontend para consumir a API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Porta do Next.js
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app = FastAPI()

@app.post("/register")
def cadastrar_usuario(usuario: Usuario):
    conn = get_connection()
    cursor = conn.cursor()

    try:
        cursor.execute("SELECT COUNT(*) FROM USUARIOS WHERE EMAIL = :1", [usuario.email])
        if cursor.fetchone()[0] > 0:
            raise HTTPException(status_code=400, detail="Usuário já existe")

        cursor.execute(
            "INSERT INTO USUARIOS (EMAIL, SENHA) VALUES (:1, :2)",
            [usuario.email, usuario.senha]
        )
        conn.commit()
        return {"message": "Usuário cadastrado com sucesso"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        cursor.close()
        conn.close()
