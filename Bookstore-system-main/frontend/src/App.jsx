import { RouterProvider } from 'react-router-dom'
import { routes } from '@routes/index'
import { useLoadingRefresh } from './hooks/useLoadingRefresh'
import { LoaderCircle } from 'lucide-react'

function App() {

    const { loading } = useLoadingRefresh()

    return (
        <>
            {loading ? (
                <div className='min-h-screen flex items-center justify-center'>
                    <LoaderCircle className='animate-spin text-[#323c99]' />

                </div>
            ) : (
                <RouterProvider router={routes} />
            )}
        </>
    )
}

export default App
