import os

from fastapi import FastAPI
from sqlmodel import create_engine, SQLModel, Session
from sqlalchemy import inspect # for dev purposes only

from app.models import Video, VideoFrame

DATABASE_URL = os.getenv("DATABASE_URL")

engine = create_engine(DATABASE_URL)

app = FastAPI()

@app.on_event("startup")
def on_startup():
    # Load models and connect to database
    print("Creating all tables")
    SQLModel.metadata.create_all(engine)

@app.on_event("shutdown")
def on_shutdown():
    engine.dispose()
    print("Engine Shut down")


@app.get("/")
async def read_root():
    return {"Hello": "How are you"}

@app.get("/tables")
def read_tables():
    inspector = inspect(engine)
    tables = inspector.get_table_names()
    return tables
