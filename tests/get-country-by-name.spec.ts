import { test, expect } from '@playwright/test';

test.describe('Buscar paises por nombre', () => {

 test('Status 200 al consultar Argentina', async ({ request }) => {
    const response = await request.get('name/argentina');
    expect(response.status()).toBe(200);
  });

  test('Validar datos completos de Argentina', async ({ request }) => {
    const response = await request.get('name/argentina');
    const data = await response.json();

    expect(data[0].name.common).toBe('Argentina');
    expect(data[0]).toHaveProperty('capital', ['Buenos Aires']);
    expect(data[0]).toHaveProperty('region', 'Americas');
    expect(data[0].borders).toEqual(['BOL', 'BRA', 'CHL', 'PRY', 'URY']);

    console.log('Respuesta JSON:', JSON.stringify(data, null, 2));
  });

  

});
