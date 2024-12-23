import { createRoot } from 'react-dom/client'
import App from '@/App'
import '@/globals.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { SnackbarProvider } from 'notistack'

createRoot(document.getElementById('root')).render(
    <SnackbarProvider autoHideDuration={2000}>
        <Provider store={store}>
            <App />
        </Provider>
    </SnackbarProvider>
)
