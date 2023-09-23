Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins 'https://example.com', 'https://otherdomain.com' # Replace with the domains you want to allow
      resource '*', headers: :any, methods: [:get, :post, :put, :patch, :delete, :options, :head]
    end
  end
  