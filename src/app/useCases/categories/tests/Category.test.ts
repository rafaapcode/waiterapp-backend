import { describe, expect, test } from 'vitest';
import { CategoryUseCases } from '../CategoryUseCases';
import { FakeDbCategory } from './fakeDbCagegory';

describe('Category', () => {
  const categoryUseCase = new CategoryUseCases(new FakeDbCategory());
  describe('List', () => {
    test('should list all categories', async () => {
      const categories = await categoryUseCase.listCategory();
      expect(categories).toEqual([]);
    });
  });
  describe('Create', () => {
    const mockListBody =  {
      name: 'Bebidas',
      icon: 'https://icon.com/bebida.png'
    };

    const incorrectMockListBody =  {
      name: 'Be',
      icon: 'teste'
    };

    test('should create a category', async () => {
      const categories = await categoryUseCase.createCategory(mockListBody);
      expect(categories).toEqual(mockListBody);
    });
    test('should return an error if the req body is incorrect', async () => {
      const categories = await categoryUseCase.createCategory(incorrectMockListBody);
      expect(categories).toEqual({error: true, message: "Invalid data"});
    });
  });
});
