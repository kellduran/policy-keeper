Rails.application.routes.draw do
  resources :policies
  resources :favorites
  resources :users do
    member do
      get :confirm_email
    end
  end



  post '/login', to: 'sessions#create'
  
  delete '/logout', to: 'sessions#destroy'

  get '/me', to: 'users#show'

  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # get '/hello', to: 'application#hello_world' 

end
