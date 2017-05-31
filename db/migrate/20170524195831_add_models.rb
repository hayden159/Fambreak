class AddModels < ActiveRecord::Migration
    def change
      create_table :fams do |t|
        t.string :name
        t.datetime :receive_time
        t.text :data
        t.timestamps null: false
      end

      create_table :creator do |t|
        t.string :login_info
        t.timestamps null: false
      end


      create_table :members do |t|
        t.string :name
        t.boolean :accepted
        t.text :attributes
        t.text :post_primary
        t.text :post2
        t.text :post3
        t.timestamps null: false
      end

      create_table :user do |t|
        t.string :phone
        t.timestamps null: false
      end
    end
end
