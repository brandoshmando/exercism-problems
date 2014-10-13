class Hamming
  #str == strand versus the common abbreviation of string
  def self.compute(first_str, second_str)
    counter = 0
    first_str.split('').each_with_index do |char, i|
      counter += if char != second_str[i]
      end
    end
    counter
  end
end