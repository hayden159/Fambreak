class AddForeignKey < ActiveRecord::Migration
  def change
    add_column :members, :user_id, :integer
    add_column :members, :fam_id, :integer

    add_index :members, :fam_id

  end
end
