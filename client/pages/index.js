import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h1 className="text-3xl font-bold text-gray-900">Bienvenido a CiviForm</h1>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Manage citizens and forms efficiently.</p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Ciudadanos</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Manejo y búsqueda de información de ciudadanos
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Forms</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Crear, editar, y procesar varios formatos
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </Layout>
  )
}