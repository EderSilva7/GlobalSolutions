import oracledb
import os
from dotenv import load_dotenv

load_dotenv()

def get_connection():
    return oracledb.connect(
        user=os.getenv("rm559647"),
        password=os.getenv("fiap"),
        dsn=os.getenv("oracle.fiap.com.br:1521/orcl")
    )
