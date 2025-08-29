from datetime import datetime
from typing import Optional, List

from sqlmodel import SQLModel, Field, Relationship, Enum

from app.enums import FlightDirection, FlightPath, Club


class Video(SQLModel, table=True):
    __tablename__ = "video"

    id: int | None = Field(default=None, primary_key=True)
    date: datetime = Field(default_factory=datetime.now, nullable=False)
    club: Club = Field(sa_column=Enum(Club, native_enum=False))
    flightDirection: FlightDirection | None = Field(
        default=None, sa_column=Enum(FlightDirection, native_enum=False)
    )
    flightPath: FlightPath | None = Field(
        default=None, sa_column=Enum(FlightPath, native_enum=False)
    )
    videoPath: str

    frames: List["VideoFrame"] = Relationship(back_populates="video")

    def __repr__(self) -> str:
        return (
            f"Video(id={self.id!r}, date={self.date!r}, club={self.club!r}, "
            f"flightDirection={self.flightDirection!r}, flightPath={self.flightPath!r}, "
            f"videoPath={self.videoPath!r})"
        )


class VideoFrame(SQLModel, table=True):
    __tablename__ = "frame"

    videoID: int = Field(foreign_key="video.id", primary_key=True)
    frameIndex: int = Field(primary_key=True)
    coordinates: str
    swingPhase: int

    video: Optional[Video] = Relationship(back_populates="frames")

    def __repr__(self) -> str:
        return (
            f"VideoFrame(videoID={self.videoID!r}, frameIndex={self.frameIndex!r}, "
            f"coordinates={self.coordinates!r}, swingPhase={self.swingPhase!r})"
        )
