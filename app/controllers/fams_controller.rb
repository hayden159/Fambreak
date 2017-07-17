
class FamsController < ApplicationController
  before_action :set_fam, only: [:show, :edit, :update, :destroy]

  # GET /myfams
  def my_fams
    @fams = Fam.all
  end

  # # GET /campers/1
  # def show
  #
  # end
  #
  # # GET /campers/new
  # def new
  #   @camper = Camper.new
  # end
  #
  # # GET /campers/1/edit
  # def edit
  # end
  #
  # # POST /campers
  # # POST /campers.json
  # def create
  #   @camper = Camper.new(camper_params.merge(medicalcompleted: 'false', user_id: current_user.id))
  #
  #   respond_to do |format|
  #     if @camper.save
  #       format.html { redirect_to @camper, notice: 'Camper was successfully created.' }
  #     else
  #       format.html { render :new }
  #     end
  #   end
  # end
  #
  # # PATCH/PUT /campers/1
  # # PATCH/PUT /campers/1.json
  # def update
  #   respond_to do |format|
  #     if @camper.update(camper_params)
  #       format.html { redirect_to @camper, notice: 'Camper was successfully updated.' }
  #     else
  #       format.html { render :edit }
  #     end
  #   end
  # end
  #
  # # DELETE /campers/1
  # # DELETE /campers/1.json
  # def destroy
  #   @camper.destroy
  #   respond_to do |format|
  #     format.html { redirect_to campers_url, notice: 'Camper was successfully destroyed.' }
  #   end
  # end
  #
  # private
  # # Use callbacks to share common setup or constraints between actions.
  # def set_camper
  #   @camper = Camper.find(params[:id])
  # end

  # Never trust parameters from the scary internet, only allow the white list through.
  def fam_params
    params.require(:fam).permit(:name)
  end
end
