import pygame
import random
import math

WIDTH = 800
HEIGHT = 600
pygame.init()
WIN = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("The Game")

BLACK = (0, 0, 0)

run = True
while run:

    WIN.fill(BLACK)

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            run = False