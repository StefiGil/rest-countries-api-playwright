import { test, expect } from '@playwright/test';

test.describe('Consultar por codigo de pais', () => {

    test('Status 200 al consultar por codigo de pais de colombia', async ({ request }) => {
        const response = await request.get('alpha/CO');
        expect(response.status()).toBe(200);
        const data = await response.json();

        console.log('Respuesta JSON:', JSON.stringify(data, null, 2));
    });

});