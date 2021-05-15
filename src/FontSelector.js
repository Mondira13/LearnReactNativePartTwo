const fontSelector = (fontName) =>{

    if(fontName == 'robo_regular')
      return 'Roboto-Regular';
    else if(fontName == 'robo_medium')
      return 'Roboto-Medium';
    else if(fontName == 'robo_bold')
      return 'Roboto-Bold';
    else if(fontName == 'robo_light')
      return 'Roboto-Light';
    else if(fontName == 'regular')
      return 'NotoSansKR-Regular';
    else if(fontName == 'medium')
      return 'NotoSansKR-Medium';
    else if(fontName == 'bold')
      return 'NotoSansKR-Bold';
    else if(fontName == 'light')
      return 'NotoSansKR-Light';
    else if(fontName == 'inter')
      return 'Inter-VariableFont_slnt,wght';

  
  }
  module.exports = fontSelector;