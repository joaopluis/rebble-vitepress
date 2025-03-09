# AppWorker

Runs in the background, and can communicate with the foreground app.

## Functions

:::info bool app_worker_is_running(void)

Determine if the worker for the current app is running. 

##### Returns

true if running 

:::

:::info AppWorkerResult app_worker_launch(void)

Launch the worker for the current app. Note that this is an asynchronous operation, a result code of APP_WORKER_RESULT_SUCCESS merely means that the request was successfully queued up. 

##### Returns

result code 

:::

:::info AppWorkerResult app_worker_kill(void)

Kill the worker for the current app. Note that this is an asynchronous operation, a result code of APP_WORKER_RESULT_SUCCESS merely means that the request was successfully queued up. 

##### Returns

result code 

:::

:::info bool app_worker_message_subscribe(AppWorkerMessageHandler handler)

Subscribe to worker messages. Once subscribed, the handler gets called on every message emitted by the other task (either worker or app). 

##### Parameters

- **handler**: A callback to be executed when the event is received 

##### Returns

true on success 

:::

:::info bool app_worker_message_unsubscribe(void)

Unsubscribe from worker messages. Once unsubscribed, the previously registered handler will no longer be called. 

##### Returns

true on success 

:::

:::info void app_worker_send_message(uint8_t type, AppWorkerMessage *data)

Send a message to the other task (either worker or app). 

##### Parameters

- **type**: An application defined message type 
- **data**: the message data structure 

:::


## Enums

:::info AppWorkerResult

Possible error codes from app_worker_launch, app_worker_kill. 

##### Values

- **APP_WORKER_RESULT_SUCCESS**: Success. 
- **APP_WORKER_RESULT_NO_WORKER**: No worker found for the current app. 
- **APP_WORKER_RESULT_DIFFERENT_APP**: A worker for a different app is already running. 
- **APP_WORKER_RESULT_NOT_RUNNING**: The worker is not running. 
- **APP_WORKER_RESULT_ALREADY_RUNNING**: The worker is already running. 
- **APP_WORKER_RESULT_ASKING_CONFIRMATION**: The user will be asked for confirmation. 

:::

:::info AppWorkerResult

Possible error codes from app_worker_launch, app_worker_kill. 

##### Values

- **APP_WORKER_RESULT_SUCCESS**: Success. 
- **APP_WORKER_RESULT_NO_WORKER**: No worker found for the current app. 
- **APP_WORKER_RESULT_DIFFERENT_APP**: A worker for a different app is already running. 
- **APP_WORKER_RESULT_NOT_RUNNING**: The worker is not running. 
- **APP_WORKER_RESULT_ALREADY_RUNNING**: The worker is already running. 
- **APP_WORKER_RESULT_ASKING_CONFIRMATION**: The user will be asked for confirmation. 

:::

## Typedefs

:::info typedef void(* AppWorkerMessageHandler) (uint16_t type, AppWorkerMessage *data)

Callback type for worker messages. Messages can be sent from worker to app or vice versa. 

##### Parameters

- **type**: An application defined message type 
- **data**: pointer to message data. The receiver must know the structure of the data provided by the sender. 

:::

:::info typedef void(* AppWorkerMessageHandler) (uint16_t type, AppWorkerMessage *data)

Callback type for worker messages. Messages can be sent from worker to app or vice versa. 

##### Parameters

- **type**: An application defined message type 
- **data**: pointer to message data. The receiver must know the structure of the data provided by the sender. 

:::

