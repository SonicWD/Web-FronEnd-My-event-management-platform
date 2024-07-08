# Event Manager Application

## Descripción
Esta es una aplicación de administración de eventos construida con React. Permite a los usuarios ver una lista de eventos, hacer clic en un evento para ver los detalles y registrar eventos. Actualmente, la aplicación utiliza datos falsos para desarrollo mientras se implementa el backend.

## Funcionalidades
- Listar eventos disponibles.
- Ver detalles de un evento específico.
- Crear un nuevo evento.
- Registrar un evento (funcionalidad futura).

## Estructura del Proyecto

/frontend
  ├── public
  ├── src
      ├── components
          ├──accounts-login
              ├──CreateAccount.jsx
              ├──Login.jsx
              ├──Register.jsx
          Events    
              ├── EventList.jsx
              ├── EventDetail.jsx
              ├── EventPage.jsx
              ├── CreateEvent.jsx
      ├──App.jsx
      ├──index.css
      ├──main.jsx
  ├── package.json
  ├── README.md
 
## Dependencias
Este proyecto utiliza las siguientes dependencias:
- React
- Axios
- PropTypes

## Instalación
Sigue estos pasos para configurar y ejecutar el proyecto localmente:

1. Clona el repositorio:
    ```sh
    git clone https://github.com/tu-usuario/event-manager.git
    ```

2. Navega al directorio del proyecto:
    ```sh
    cd frontend
    ```

3. Instala las dependencias necesarias:
    ```sh
    npm install
    ```

## Scripts Disponibles
En el directorio del proyecto, puedes ejecutar:

### `npm start`
Ejecuta la aplicación en modo de desarrollo.
Abre [http://localhost:3000](http://localhost:3000) para verla en el navegador.

### `npm test`
Lanza el corredor de pruebas en el modo de reloj interactivo.
Consulta la sección sobre running tests para obtener más información.

### `npm run build`
Construye la aplicación para producción en la carpeta `build`.
Empaqueta React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

## Componentes

### `EventPage.jsx`
Maneja el estado general y la lógica para mostrar la lista de eventos y los detalles de un evento seleccionado. Utiliza datos falsos para pruebas.

### `EventList.jsx`
Lista todos los eventos disponibles. Actualmente, obtiene datos falsos generados localmente.

### `EventDetail.jsx`
Muestra los detalles de un evento específico cuando se selecciona.

### `CreateEvent.jsx`
Formulario para crear un nuevo evento. Permite a los usuarios ingresar detalles del evento y enviarlos.

## Ejemplo de Datos Falsos
Los datos falsos se generan con la siguiente función para desarrollo:

```js
const generateFakeEvents = () => {
    return [
        { id: 1, title: 'Evento falso 1', description: 'nanana mañana a las 8', date: new Date().toISOString(), location: 'Auditorio Principal', image: 'https://via.placeholder.com/150' },
        { id: 2, title: 'Evento falso 2', description: 'Pasado mañana supongo reunion con RH por chiste de la capa 8 a clientes xd', date: new Date().toISOString(), location: 'Sala de Juntas', image: 'https://via.placeholder.com/150' },
    ];
};

## Uso de Datos Falsos
Para usar datos falsos mientras se implementa el backend, comenta la lógica de `useEffect` que hace la llamada a la API real y usa los datos generados localmente:

```js
useEffect(() => {
    // const fetchEvents = async () => {
    //     try {
    //         const response = await axios.get('/events');
    //         setEvents(Array.isArray(response.data) ? response.data : []);
    //     } catch (error) {
    //         setError('Error fetching events');
    //     } finally {
    //         setLoading(false);
    //     }
    // };
    // fetchEvents();
    setEvents(generateFakeEvents());
    setLoading(false);
}, []);

## Estilos
Los componentes utilizan clases CSS predefinidas en `assets/styles/estilos.css` para asegurar una apariencia coherente.
