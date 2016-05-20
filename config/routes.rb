Rails.application.routes.draw do

  root "welcome#index"

  namespace :api do
    resources :guests
  end

end
