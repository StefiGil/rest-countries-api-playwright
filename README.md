# Pruebas de APIs - Rest Countries

Este proyecto contiene pruebas automatizadas de la API de **Rest Countries** ([https://restcountries.com](https://restcountries.com/#endpoints-region)) usando **Playwright** con **TypeScript**. El objetivo es validar funcionalidades de la API y asegurar que responde correctamente ante distintos escenarios, incluyendo casos negativos y validación de esquemas.

## Estructura del proyecto

```
rest-countries-api-playwright/
│
├─ tests/                 # Archivos de tests de API
│   ├─ get-country-by-name.spec.ts
│   ├─ get-country-by-code.spec.ts
│   ├─ get-country-by-region.spec.ts
│   ├─ negative-cases.spec.ts
│   └─ schema-validation.spec.ts
│
├─ data/                  # Datos de prueba
│   └─ invalidCountries.json
│
├─ playwright.config.ts    # Configuración de Playwright
├─ package.json            # Dependencias y scripts
└─ README.md
```

## Requisitos e instalación

1. Instalar Node.js >= 18

## Cómo ejecutar las pruebas

1. Clonar el repositorio:  
```bash
git clone https://github.com/StefiGil/rest-countries-api-playwright.git
cd rest-countries-api-playwright
```

2. Instalar dependencias:  
```bash
npm install
```

3. Ejecutar las pruebas:  
```bash
npm run test
```


## Tipos de pruebas incluidas

- **Búsqueda por nombre de país**
- **Búsqueda por código de país**
- **Búsqueda por región**
- **Casos negativos** (inputs inválidos)
- **Validación de esquemas** (comprobando que la respuesta cumpla el formato esperado)
