class CreatorsController < ApplicationController

  before_action :set_fam, only: [:name_fam]


  def edit_fam_app

  end

  # Enter name form submission
  def name_fam
    @fam = Fam.new
  end

  def save_name(family)
    family.save
  end

end