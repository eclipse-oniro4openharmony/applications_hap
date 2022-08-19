(()=>{"use strict";var e={};(()=>{var t=e;Object.defineProperty(t,"__esModule",{value:!0});const o="Template-DownloadTemplate";class i extends View{constructor(e,t,o){super(e,t),this.icon=null,this.__title=new ObservedPropertySimple("",this,"title"),this.__detailedInfo=new ObservedPropertySimple("",this,"detailedInfo"),this.__passTime=new ObservedPropertySimple(0,this,"passTime"),this.__fileName=new ObservedPropertySimple("",this,"fileName"),this.__progressValue=new ObservedPropertySimple(40,this,"progressValue"),this.__isShowDetailedInfo=new ObservedPropertySimple(!1,this,"isShowDetailedInfo"),this.updateWithValueParams(o)}updateWithValueParams(e){void 0!==e.icon&&(this.icon=e.icon),void 0!==e.title&&(this.title=e.title),void 0!==e.detailedInfo&&(this.detailedInfo=e.detailedInfo),void 0!==e.passTime&&(this.passTime=e.passTime),void 0!==e.fileName&&(this.fileName=e.fileName),void 0!==e.progressValue&&(this.progressValue=e.progressValue),void 0!==e.isShowDetailedInfo&&(this.isShowDetailedInfo=e.isShowDetailedInfo)}aboutToBeDeleted(){this.__title.aboutToBeDeleted(),this.__detailedInfo.aboutToBeDeleted(),this.__passTime.aboutToBeDeleted(),this.__fileName.aboutToBeDeleted(),this.__progressValue.aboutToBeDeleted(),this.__isShowDetailedInfo.aboutToBeDeleted(),SubscriberManager.Get().delete(this.id())}get title(){return this.__title.get()}set title(e){this.__title.set(e)}get detailedInfo(){return this.__detailedInfo.get()}set detailedInfo(e){this.__detailedInfo.set(e)}get passTime(){return this.__passTime.get()}set passTime(e){this.__passTime.set(e)}get fileName(){return this.__fileName.get()}set fileName(e){this.__fileName.set(e)}get progressValue(){return this.__progressValue.get()}set progressValue(e){this.__progressValue.set(e)}get isShowDetailedInfo(){return this.__isShowDetailedInfo.get()}set isShowDetailedInfo(e){this.__isShowDetailedInfo.set(e)}aboutToAppear(){console.log(`${o} ------\x3e aboutToAppear, icon: ${JSON.stringify(this.icon)}`),console.log(`${o} ------\x3e aboutToAppear, title: ${this.title}`),console.log(`${o} ------\x3e aboutToAppear, detailedInfo: ${this.detailedInfo}`),console.log(`${o} ------\x3e aboutToAppear, passTime: ${this.passTime}`),console.log(`${o} ------\x3e aboutToAppear, fileName: ${this.fileName}`),console.log(`${o} ------\x3e aboutToAppear, progressValue: ${this.progressValue}`)}render(){Flex.create({direction:FlexDirection.Column,alignItems:ItemAlign.Center,justifyContent:FlexAlign.Start}),Flex.width("100%"),Flex.margin({top:12,bottom:12}),Flex.border({width:1,color:Color.White,radius:30}),Flex.backgroundColor(Color.White),Column.create({space:10}),Column.alignItems(HorizontalAlign.Center),Column.width("100%"),Row.create({space:10}),Row.alignItems(VerticalAlign.Center),Row.align(Alignment.Start),Row.margin({bottom:12}),Row.width("100%"),If.create(),this.icon&&(If.branchId(0),Image.create(this.icon),Image.objectFit(ImageFit.Contain),Image.width(16),Image.height(16)),If.pop(),Text.create(this.title),Text.fontColor("#182431"),Text.fontSize("12"),Text.fontWeight(FontWeight.Regular),Text.align(Alignment.Start),Text.pop(),Text.create("已完成:"),Text.fontColor("#182431"),Text.fontSize("12"),Text.fontWeight(FontWeight.Regular),Text.pop(),Text.create(`${this.progressValue}%`),Text.fontColor("#182431"),Text.fontSize("12"),Text.fontWeight(FontWeight.Regular),Text.pop(),Text.create(`${this.passTime}分钟前`),Text.fontColor("#182431"),Text.fontSize("12"),Text.fontWeight(FontWeight.Regular),Text.pop(),Row.pop(),Flex.create({justifyContent:FlexAlign.SpaceBetween}),Flex.width("100%"),Row.create({space:5}),Row.flexShrink(0),Row.alignItems(VerticalAlign.Center),Row.align(Alignment.Start),Text.create("标题：正在接收"),Text.fontColor("#182431"),Text.fontSize("14"),Text.pop(),Text.create(this.fileName),Text.fontColor("#182431"),Text.fontSize("14"),Text.pop(),Row.pop(),Row.create(),Row.alignItems(VerticalAlign.Center),Row.align(Alignment.End),Row.onClick((()=>this.isShowDetailedInfo=!this.isShowDetailedInfo)),Text.create("文件详情"),Text.fontColor("#182431"),Text.fontSize("14"),Text.fontWeight(FontWeight.Regular),Text.pop(),Row.pop(),Flex.pop(),If.create(),this.isShowDetailedInfo&&(If.branchId(0),Row.create(),Row.alignItems(VerticalAlign.Center),Row.align(Alignment.Start),Row.width("100%"),Text.create(this.detailedInfo),Text.maxLines(3),Text.textOverflow({overflow:TextOverflow.Ellipsis}),Text.fontColor("#182431"),Text.fontSize("14"),Text.pop(),Row.pop()),If.pop(),Column.create(),Column.alignItems(HorizontalAlign.Start),Column.width("100%"),Progress.create({value:this.progressValue,total:100,style:ProgressStyle.Linear}),Progress.color(Color.Blue),Progress.value(this.progressValue),Progress.width("100%"),Column.pop(),Column.pop(),Flex.pop()}}t.default=i,loadDocument(new i("1",void 0,{}))})()})();
//# sourceMappingURL=../_releaseMap/pages/downloadTemplate.js.map