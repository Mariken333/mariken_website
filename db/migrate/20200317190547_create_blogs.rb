class CreateBlogs < ActiveRecord::Migration[5.2]
  def change
    create_table :blogs do |t|
      t.string :title
      t.text :content
      t.date :date
      t.string :topic
      t.string :tag

      t.timestamps
    end
  end
end
