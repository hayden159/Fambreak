class Member < ActiveRecord::Base
  has_one :user
  belongs_to :fam
  belongs_to :creator
end