import pygame
from svgwrite import Drawing

# Initialize Pygame
pygame.init()

screen = pygame.display.set_mode((600, 400))

# Load the SVG
svg_file = "script.svg"  # Path to your SVG file
dwg = Drawing(viewBox="40 40 400 300")  # Adjust viewBox if needed
dwg.load(svg_file)  
svg_data = dwg.tostring()
surface = pygame.image.fromstring(svg_data, (400, 300), "RGBA")

# Place the SVG onto the Pygame surface 
screen.blit(surface, (40, 40)) 


# Update the display 
pygame.display.flip()

# Keep the window open until closed
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False


pygame.quit() 