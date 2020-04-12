const React = require("react");
const CompLibrary = require("../../core/CompLibrary.js");
const MarkdownBlock = CompLibrary.MarkdownBlock;

const About = () => (
  <div className="pageContainer aboutPage">
    <MarkdownBlock>
      {`
“React Native中文网”由以下人员维护：

[晴明](http://github.com/sunnylqm)

[天地之灵](http://github.com/tdzl2003) 

React Native及相关标识版权由©Facebook Inc.所有。本网站并非隶属于Facebook。

## 需要帮助？

### QQ群

“React Native中文网”的维护人员和其他参与者都在  
> 主群：578728219
1群： 439022088   
2群： 488376556   
3群： 527104912  
4群： 170754112  
5群： 138811944  
6群： 446548027  
7群： 115487854  
8群： 317323710  
9群： 128731649
   
讨论交流。群里会经常发布许多新的教程和资讯。

### 技术支持与商务合作

需要量身订做、随叫随到的完善技术支持？或是更深入地定制化服务，比如<span style="background:#96E164">技术内部培训、项目技术咨询管理、项目解决方案</span>等，请联系：QQ 34731408 或 [hi@charmlot.com](mailto:hi@charmlot.com)

## 版权声明

1. “React Native中文网”对所提供的教学视频、教学成果、服务及本服务所使用的软件、资料、源代码等均受知识产权法或其他法律保护的资料享有相应的权利，包括但不限于受到著作权法及其实施细则、商标法及其实施细则、专利法及其实施细则或其他法律的保护。

2. “React Native中文网”提供的网上内容，其版权归“React Native中文网”所有（除特殊声明版权所有单位的除外），包括但不限于全部的视频文件、文字、图像、声音文件、源代码、网站设计等。未经“React Native中文网”授权许可，用户不得进行传播（包括转载、转贴等）、修改、出租、散布或演绎衍生其他作品，任何组织或个人不得复制或在非“React Native中文网”所属的服务器上做镜像。

3. React Native及相关标识版权由©Facebook Inc.所有。“React Native中文网”VI标识、设计以及产品及服务名称等，均为“React Native中文网”所享有，只用于“React Native中文网”及经许可的授权合作机构。非经授权，任何人不得使用、复制或作其他用途。

4. 本网站为用户提供评论和提问等服务时，对于本版内用户所发布的内容所引发的有关版权、著作权等知识产权的异议、纠纷及诉讼不承担任何责任。提交者发言纯属个人行为，与本网站立场无关。

5. 本网所有内容，凡注明来源为““React Native中文网””的所有文字、图片和音频、视频资料，版权均属“React Native中文网”所有，任何媒体、网站或个人未经本网协议书面授权，不得转载、链接、转贴或以其他方式复制发布或发表。已经本网协议授权的媒体、网站，在下载使用时必须注明”稿件来源：“React Native中文网”"，违者本网将依法追究责任。非“React Native中文网”来源的文/图等稿件，本网转载出于传递更多信息之目的，并不意味着赞同其观点或证实其内容的真实性。

6. 除注明来源为““React Native中文网””的内容外，本网以下内容亦不可任意转载：

    * 本网所指向的非本网内容的相关链接内容；

    * 已作出不得转载或未经许可不得转载声明的内容；

    * 未由本网署名或本网引用、转载的他人作品等非本网版权内容；

    * 本网中特有的图形、标志、页面风格、编排方式、程序等；

    * 本网中必须具有特别授权或具有注册用户资格方可知晓的内容；

    * 其他法律不允许或本网认为不适合转载的内容。

7. 转载或引用本网内容必须是以新闻性或资料性公共免费信息为使用目的的合理、善意引用，不得对本网内容原意进行曲解、修改，同时必须保留本网注明的“稿件来源”，并自负版权等法律责任。

8. 转载或引用本网内容不得进行如下活动：

    * 损害本网或他人利益；

    * 任何违法行为；

    * 任何可能破坏公秩良俗的行为；

    * 擅自同意他人继续转载、引用本网内容；

9. 转载或引用本网版权所有之内容须注明“转自（或引自）“React Native中文网””字样。

10. 转载或引用本网中的署名文章用于商业行为的，请按规定向作者支付稿酬。

11. 对于不当转载或引用本网内容而引起的民事纷争、行政处理或其他损失，本网不承担责任。

12. 对不遵守本声明或其他违法、恶意使用本网内容者，本网将依法追究其法律责任的权利。 本网站授权版权律师负责处理本网站的一切版权事务。

13. 本版权声明的解释权归“React Native中文网”。

## 关于我们

React Native中文网是由武汉青罗网络科技有限公司创办的，提供与React Native相关的文档、资讯以及教程。React Native是一个跨平台移动APP开发框架，着力于提高多平台开发的开发效率，使你能够在JavaScript 和react的基础上获得完全一致的开发体验，构建世界一流的原生app.

邮箱：[hi@charmlot.com](mailto:hi@charmlot.com)
`}
    </MarkdownBlock>
  </div>
);

About.defaultProps = {
  language: "en"
};

module.exports = About;
