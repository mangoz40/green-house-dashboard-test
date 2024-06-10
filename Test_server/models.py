from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class SensorData(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    timestamp = db.Column(db.DateTime, nullable=False)
    value1 = db.Column(db.Float, nullable=False)
    value2 = db.Column(db.Float, nullable=False)  # Adjust column names and data types as needed

    def __repr__(self):
        return f"<SensorData {self.id}, {self.timestamp}>"
