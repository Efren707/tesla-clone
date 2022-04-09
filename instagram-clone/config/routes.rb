Rails.application.routes.draw do
  devise_for :accounts
  resources :posts, only: [:show, :new, :create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/dashboard" => "accounts#index"
  root to: "public#homepage"

end
