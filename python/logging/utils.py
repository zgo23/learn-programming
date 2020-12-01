import os


def get_logs_directory():
    return os.path.join(os.path.dirname(os.path.abspath(__file__)), "logs")
