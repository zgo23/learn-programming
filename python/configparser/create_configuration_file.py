import configparser
from utils import get_cwd

config = configparser.ConfigParser()
config["DEFAULT"] = {
    "ServerAliveInterval": "45",
    "Compression": "yes",
    "CompressedLevel": "9",
}
config["bitbucket.org"] = {}
config["bitbucket.org"]["User"] = "hg"
config["topsecret.server.com"] = {}
topsecret = config["topsecret.server.com"]
topsecret["Port"] = "50022"
topsecret["ForwardXll"] = "no"
config["DEFAULT"]["ForwardXll"] = "yes"

configfile_path = f"{get_cwd()}/example.ini"
with open(configfile_path, "w") as configfile:
    config.write(configfile)