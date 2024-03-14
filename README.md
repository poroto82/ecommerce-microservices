## The idea on this repo  is to enhance prestashop database model, to get all the  data that they manage, and in the process, try to reconvert from monolith to an microservices architecture. sooo this is the first of many.

# Gestión de Productos (Product-Hub)
## ¿Qué hace?
El servicio Product-Hub se encarga de administrar todos los aspectos relacionados con los productos disponibles en nuestra plataforma. Esto incluye la creación, actualización, eliminación y consulta de información detallada sobre los productos.

## ¿Cómo se usa desde la aplicación?
Creación de Productos:

Los administradores de la plataforma pueden utilizar la aplicación para agregar nuevos productos al sistema. Esto implica proporcionar detalles como el nombre del producto, la descripción, las imágenes y otras características relevantes.
Actualización de Productos:

Si un producto necesita ser modificado (por ejemplo, un cambio en el precio o una actualización de la descripción), los administradores pueden hacerlo a través de la interfaz de administración de la aplicación.
Eliminación de Productos:

En caso de que un producto ya no esté disponible o sea descontinuado, los administradores pueden eliminarlo de la plataforma utilizando la aplicación.
Consulta de Productos:

Los usuarios finales pueden explorar y buscar productos disponibles en la plataforma a través de la interfaz de usuario de la aplicación. Esta información se obtiene del servicio Product-Hub.

# Gestión de Stock (Stock-Hub)
## ¿Qué hace?
El servicio Stock-Hub se encarga de gestionar el inventario de productos disponibles en la plataforma. Esto implica mantener un registro actualizado del stock disponible para cada producto.

## ¿Cómo se usa desde la aplicación?
Consulta de Stock:

Cuando un usuario realiza una compra o consulta la disponibilidad de un producto, la aplicación consulta el servicio Stock-Hub para obtener información sobre la disponibilidad de stock.
Actualización de Stock:

Cuando se realizan ventas o se reciben nuevas existencias de productos, la aplicación actualiza la información de stock en el servicio Stock-Hub para reflejar los cambios en tiempo real.

# Gestión de Precios (Price-Hub)
## ¿Qué hace?
El servicio Price-Hub gestiona los precios de los productos en la plataforma. Esto incluye establecer precios base, aplicar descuentos, promociones y cualquier otra regla de precios relevante.

## ¿Cómo se usa desde la aplicación?
Obtención de Precios:

La aplicación consulta el servicio Price-Hub para obtener información actualizada sobre los precios de los productos antes de mostrarlos a los usuarios finales.
Aplicación de Descuentos y Promociones: (mmmm maybe new microservice)

Si hay descuentos o promociones activas, la aplicación los aplica automáticamente al precio base del producto antes de mostrarlo al usuario final.

# API Gateway
## ¿Qué hace?
El API Gateway actúa como un punto de entrada para todas las solicitudes de los clientes. Enrutará las solicitudes entrantes a los servicios correspondientes según la lógica de negocio y devolverá las respuestas adecuadas a los clientes.

## ¿Cómo se usa desde la aplicación?
Enrutamiento de Solicitudes:

Cuando un cliente realiza una solicitud a través de la aplicación, esta se envía al API Gateway, que luego la enruta al servicio correspondiente (Product-Hub, Stock-Hub o Price-Hub) según el tipo de solicitud y la información requerida.
Orquestación de Servicios:

El API Gateway coordina las interacciones entre los diferentes servicios, asegurándose de que la información correcta se obtenga y se presente al usuario final de manera eficiente.

# Mensajería (RabbitMQ)
## ¿Qué hace?
RabbitMQ es un servicio de mensajería utilizado para la comunicación asincrónica entre los diferentes servicios de la aplicación. Facilita la integración y la sincronización de datos entre los servicios de manera eficiente.

## ¿Cómo se usa desde la aplicación?
Comunicación Asincrónica:

Los servicios de la aplicación pueden enviar y recibir mensajes a través de RabbitMQ para realizar tareas como la actualización de datos, la sincronización de información y otras operaciones asincrónicas que no requieren una respuesta inmediata.
Integración entre Servicios:

RabbitMQ facilita la integración entre los diferentes servicios de la aplicación, permitiéndoles comunicarse entre sí de manera eficiente y escalable.
