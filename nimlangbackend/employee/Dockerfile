# Use an official lightweight Python image
FROM python:3.9-slim


# Set the working directory
WORKDIR /app

# Copy only requirements first to leverage Docker cache
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application files
COPY . .

# Expose the service port
EXPOSE 5000

# Define the command to run the Flask app
CMD ["python", "app.py"]
