class Api::GuestsController < ApplicationController

  # GET    /api/guests(.:format)          api/guests#index
  def index
    render json: { guests: Guest.all }
  end

  # POST   /api/guests(.:format)          api/guests#create
  def create
    new_guest = Guest.create guest_params
    render json: { new_guest: new_guest }
  end

  # GET    /api/guests/:id(.:format)      api/guests#show
  def show
    the_guest = Guest.find params[:id]
    render json: { guest: the_guest }
  end

  # PUT    /api/guests/:id(.:format)      api/guests#update
  def update
    guest_edit = Guest.find params[:id]
    guest_edit.update guest_params
    render json: {guest: guest_edit}
  end

  # DELETE /api/guests/:id(.:format)      api/guests#destroy
  def destroy
    death_of_guest = Guest.find params[:id]
    death_of_guest.destroy
    render json: {success: "Destroyed: " + death_of_guest.name}
  end

  private

  def guest_params
    params.require(:guest).permit(:name, :email, :guestcount)
  end

end
