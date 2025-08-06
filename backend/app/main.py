from fastapi import FastAPI
from databases import Database
from sqlalchemy import create_engine, MetaData
from contextlib import asynccontextmanager

from app.models import Video, VideoFrame

DATABASE_URL = "postgresql://root:root@localhost/swingdb"

database = Database(DATABASE_URL)
metadata = MetaData()

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Connect to database
    engine = create_engine(url=DATABASE_URL, echo=True)
    metadata.create_all(engine, tables=[Video, VideoFrame])
    await database.connect()

    yield
    
    await(database.disconnect())

app = FastAPI(lifespan=lifespan)
