# Containerization

Containerization is the process of encapsulating software code along with all of its dependencies inside a single package so that it can be run consistently anywhere.

# Virtual Machine

A virtual machine is the emulated equivalent of a physical computer system with their virtual CPU, memory, storage, and operating system.

# Hypervisor

A program known as a hypervisor creates and runs virtual machines.

# Host System

The physical computer running a hypervisor is called the host system

# Guest System

The virtual machines are called guest systems.

# Container

A container is an abstraction at the application layer that packages code and dependencies together. Instead of virtualizing the entire physical machine, containers virtualize the host operating system only.

Containers are images in running state. When we pull an image like hello-world and run them, they create an isolated environment suitable for running the program included in the image. This isolated environment is a container.

# Image

Images are multi-layered self-contained files that act as the template for creating Docker containers. Images can be exchanged through registries. We can use any image built by others or can also modify them by adding new instructions.

# Registry

Registries are storage for Docker images. Docker Hub is the default public registry for storing images.
