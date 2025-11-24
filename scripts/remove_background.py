#!/usr/bin/env python3
"""
Скрипт для удаления темного фона из скриншота продукта
Требует установки: pip install Pillow numpy
"""

from PIL import Image
import numpy as np
import sys
import os

def remove_dark_background(input_path, output_path, threshold=50):
    """
    Удаляет темный фон из изображения, делая его прозрачным
    
    Args:
        input_path: путь к исходному изображению
        output_path: путь для сохранения обработанного изображения
        threshold: порог яркости для определения фона (0-255)
    """
    # Открываем изображение
    img = Image.open(input_path)
    
    # Конвертируем в RGBA для поддержки прозрачности
    if img.mode != 'RGBA':
        img = img.convert('RGBA')
    
    # Преобразуем в numpy array
    data = np.array(img)
    
    # Получаем яркость каждого пикселя
    # Используем формулу для расчета яркости: 0.299*R + 0.587*G + 0.114*B
    brightness = np.dot(data[...,:3], [0.299, 0.587, 0.114])
    
    # Создаем маску: пиксели темнее порога становятся прозрачными
    mask = brightness > threshold
    
    # Применяем маску к альфа-каналу
    data[..., 3] = data[..., 3] * mask
    
    # Создаем новое изображение
    result = Image.fromarray(data, 'RGBA')
    
    # Сохраняем
    result.save(output_path, 'PNG')
    print(f"✓ Обработанное изображение сохранено: {output_path}")

if __name__ == "__main__":
    input_file = "images/Screenshot 2025-11-24 165830.png"
    output_file = "public/images/product-screenshot.png"
    
    # Проверяем существование файла
    if not os.path.exists(input_file):
        print(f"✗ Файл не найден: {input_file}")
        sys.exit(1)
    
    # Создаем директорию если нужно
    os.makedirs(os.path.dirname(output_file), exist_ok=True)
    
    # Обрабатываем изображение
    try:
        remove_dark_background(input_file, output_file, threshold=60)
        print("✓ Фон успешно удален!")
    except Exception as e:
        print(f"✗ Ошибка при обработке: {e}")
        sys.exit(1)


