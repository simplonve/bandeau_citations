class CreateCitations < ActiveRecord::Migration
  def change
    create_table :citations do |t|
      t.text :citation
      t.string :auteur
    end
  end
end
