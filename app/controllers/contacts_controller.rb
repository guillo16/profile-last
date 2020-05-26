class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    respond_to do |format|
      if @contact.deliver
        format.html { redirect_to 'pages/home' }
        format.js { flash[:alert] = "Thanks for your message we will contact soon" }
      else
        format.html { render 'index' }
        format.js
      end
    end
  end
end
