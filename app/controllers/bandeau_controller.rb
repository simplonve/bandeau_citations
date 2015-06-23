class BandeauController < ApplicationController
  def citations
  	tirage_citation = rand(Citation.all.length)+1
  	@citation = Citation.find(tirage_citation)
  end
end
