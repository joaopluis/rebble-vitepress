# Dictation

## Functions

:::info DictationSession * dictation_session_create(uint32_t buffer_size, DictationSessionStatusCallback callback, void *callback_context)

Create a dictation session. The session object can be used more than once to get a transcription. When a transcription is received a buffer will be allocated to store the text in with a maximum size specified by buffer_size. When a transcription and accepted by the user or a failure of some sort occurs, the callback specified will be called with the status and the transcription if one was accepted. 

##### Parameters

- **buffer_size**: size of buffer to allocate for the transcription text; text will be truncated if it is longer than the maximum size specified; a size of 0 will allow the session to allocate as much as it needs and text will not be truncated 
- **callback**: dictation session status handler (must be valid) 
- **callback_context**: context pointer for status handler 

##### Returns

handle to the dictation session or NULL if the phone app is not connected or does not support voice dictation, if this is called on a platform that doesn't support voice dictation, or if an internal error occurs. 

:::

:::info void dictation_session_destroy(DictationSession *session)

Destroy the dictation session and free its memory. Will terminate a session in progress. 

##### Parameters

- **session**: dictation session to be destroyed 

:::

:::info DictationSessionStatus dictation_session_start(DictationSession *session)

Start the dictation session. The dictation UI will be shown. When the user accepts a transcription or exits the UI, or, when the confirmation dialog is disabled and a status is received, the status callback will be called. Can only be called when no session is in progress. The session can be restarted multiple times after the UI is exited or the session is stopped. 

##### Parameters

- **session**: dictation session to start or restart 

##### Returns

true if session was started, false if session is already in progress or is invalid. 

:::

:::info DictationSessionStatus dictation_session_stop(DictationSession *session)

Stop the current dictation session. The UI will be hidden and no status callbacks will be received after the session is stopped. 

##### Parameters

- **session**: dictation session to stop 

##### Returns

true if session was stopped, false if session was not started or is invalid 

:::

:::info void dictation_session_enable_confirmation(DictationSession *session, bool is_enabled)

Enable or disable user confirmation of transcribed text, which allows the user to accept or reject (and restart) the transcription. Must be called before the session is started. 

##### Parameters

- **session**: dictation session to modify 
- **is_enabled**: set to true to enable user confirmation of transcriptions (default), false to disable 

:::

:::info void dictation_session_enable_error_dialogs(DictationSession *session, bool is_enabled)

Enable or disable error dialogs when transcription fails. Must be called before the session is started. Disabling error dialogs will also disable automatic retries if transcription fails. 

##### Parameters

- **session**: dictation session to modify 
- **is_enabled**: set to true to enable error dialogs (default), false to disable 

:::


## Enums

:::info DictationSessionStatus

##### Values

- **DictationSessionStatusSuccess**: Transcription successful, with a valid result. 
- **DictationSessionStatusFailureTranscriptionRejected**: User rejected transcription and exited UI. 
- **DictationSessionStatusFailureTranscriptionRejectedWithError**: User exited UI after transcription error. 
- **DictationSessionStatusFailureSystemAborted**: Too many errors occurred during transcription and the UI exited. 
- **DictationSessionStatusFailureNoSpeechDetected**: No speech was detected and UI exited. 
- **DictationSessionStatusFailureConnectivityError**: No BT or internet connection. 
- **DictationSessionStatusFailureDisabled**: Voice transcription disabled for this user. 
- **DictationSessionStatusFailureInternalError**: Voice transcription failed due to internal error. 
- **DictationSessionStatusFailureRecognizerError**: Cloud recognizer failed to transcribe speech (only possible if error dialogs disabled) 

:::

## Typedefs

:::info typedef struct DictationSession DictationSession

:::

:::info typedef void(* DictationSessionStatusCallback) (DictationSession *session, DictationSessionStatus status, char *transcription, void *context)

Dictation status callback. Indicates success or failure of the dictation session and, if successful, passes the transcribed string to the user of the dictation session. The transcribed string will be freed after this call returns, so the string should be copied if it needs to be retained afterwards. 

##### Parameters

- **session**: dictation session from which the status was received 
- **status**: dictation status 
- **transcription**: transcribed string 
- **context**: callback context specified when starting the session 

:::

