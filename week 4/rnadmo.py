import pygame
import random

pygame.init()
WIDTH = 800
HEIGHT = 600
WIN = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Yuh Huh")

class paddle():
    def __init__(self, x, y) -> None:
        self.x = x
        self.y = y
        self.wid = 20
        self.hei = 100
    
    def draw(self):
        WIN.fill((255, 255, 255), pygame.rect.Rect(self.x, self.y, self.wid, self.hei))

def main():

    player = paddle(30, 30)

    run = True
    while run:

        WIN.fill((0, 0, 0))

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
            elif event.type == pygame.KEYDOWN:
                if event.key == pygame.K_DOWN:
                    player.y -= 5
                elif event.key == pygame.K_UP:
                    player.y += 5
        
        player.draw()
        
        pygame.display.flip()

if __name__ == "__main__":
    main()