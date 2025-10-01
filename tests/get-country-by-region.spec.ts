import { test, expect } from '@playwright/test';

test.describe('Consultar por region', () => {

    test('Status 200 al consultar por region de europa', async ({ request }) => {
        const response = await request.get('region/europe');
        expect(response.status()).toBe(200);
        const data = await response.json();

        console.log('Respuesta JSON:', JSON.stringify(data, null, 2));
    });

});