from typing import Optional
from sqlalchemy import ForeignKey, String, DateTime, Enum
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship

from app.enums import FlightDirection, FlightPath, Club

class Base(DeclarativeBase):
    pass

class Video(Base):
    __tablename__ = "video"

    id: Mapped[int] = mapped_column(primary_key=True)
    date: Mapped[DateTime]
    club: Mapped[Club] = mapped_column(
        Enum(Club, native_enum=False)
    )
    flightDirection: Mapped[Optional[FlightDirection]] = mapped_column (
        Enum(FlightDirection, native_enum=False)
    )
    flightPath: Mapped[Optional[FlightPath]] = mapped_column (
        Enum(FlightPath, native_enum=False)
    )
    videoPath: Mapped[String]

    def __repr__(self) -> str:
        return f'Video(id={self.id!r}, date={self.date!r}, club={self.club!r}, flightDirection={self.flightDirection!r}, flightPath={self.flightPath!r}, videoPath={self.videoPath!r})'

class VideoFrame(Base):
    __tablename__ = "frame"

    videoID: Mapped[int] = mapped_column(ForeignKey(f'{Video.__tablename__}.id'), primary_key=True)
    frameIndex: Mapped[int] = mapped_column(primary_key=True)
    coordinates: Mapped[String]
    swingPhase: Mapped[int]

    def __repr__(self) -> str:
        return f'VideoFrame(videoID={self.videoID!r}, frameIndex={self.frameIndex!r}, coordinates={self.coordinates!r}, swingPhase={self.swingPhase!r})'