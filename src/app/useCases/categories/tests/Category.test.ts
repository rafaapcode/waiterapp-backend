import { describe, expect, test, vi } from 'vitest';
import { Category } from '../../../models/Category';
import { listCategories } from '../ListCategories';

describe('Category', () => {
  describe('List', () => {
    const mockListData = [
      {
        name: 'Bebidas',
        icon: 'https://icon.com/bebida.png'
      },
      {
        name: 'Sobremesa',
        icon: 'https://icon.com/doce.png'
      }
    ]

    test('should list all categories', async () => {
      const spy = vi.spyOn(Category, 'find').mockResolvedValue(mockListData);
      const categories = await listCategories();
      expect(categories).toEqual(mockListData);
      expect(spy).toHaveBeenCalled();
    });
  });
  // describe('Create', () => {
  //   const mockListBody =  {
  //     _id: '123',
  //     name: 'Bebidas',
  //     icon: 'https://icon.com/bebida.png'
  //   };

  //   test('should create a category', async () => {
  //     const spy = vi.spyOn(Category, 'create').mockImplementationOnce(() => {
  //       return mockListBody;
  //     });
  //     const categories = await createCategory(mockListBody);
  //     expect(categories).toEqual(mockListBody);
  //     expect(spy).toHaveBeenCalled();
  //   });
  // });
});
