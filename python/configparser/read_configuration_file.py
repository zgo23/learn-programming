import configparser
from utils import get_cwd

config = configparser.ConfigParser()
print(config.sections())

configfile_path = f"{get_cwd()}/example.ini"
print(config.read(configfile_path))

print(config.sections())

print("bitbucket.org" in config)
print("bytebong.com" in config)
print(config["bitbucket.org"]["User"])
print(config["DEFAULT"]["Compression"])
