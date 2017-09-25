=begin
Usage: {% assign curClass = style | getKey: "wrapper" %}
=end
module Jekyll
  module PropFromMapFilter
    def getKey(map, key)
      map[key]
    end
  end
end

Liquid::Template.register_filter(Jekyll::PropFromMapFilter)
