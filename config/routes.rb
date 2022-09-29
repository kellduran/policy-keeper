Rails.application.routes.draw do
  resources :favorites
  resources :policies 
  resources :users do
    member do
      get :confirm_email
    end
  end



  post '/login', to: 'sessions#create'
  
  delete '/logout', to: 'sessions#destroy'

  get '/me', to: 'users#me'

  delete '/done', to: 'users#destroy'

  delete '/removepolicy', to: 'favorites#destroy'
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # get '/hello', to: 'application#hello_world' 

end
