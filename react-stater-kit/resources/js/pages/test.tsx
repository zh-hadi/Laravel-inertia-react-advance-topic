import AppLayout from "@/layouts/app-layout"
import { Head } from "@inertiajs/react"

export default function Test()
{
    return <>
        <AppLayout breadcrumbs={[{title: 'Dashboard', href: '/dashboard'},{title: 'Test Page', href: '/test'}]}>
            <Head title="Test Page"/>
            <h2>Hello world</h2>
        </AppLayout>
    </>
}