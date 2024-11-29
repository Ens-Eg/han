"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import Image from "next/image";

import faqImg from "../../../public/images/faq-img.png";

const Faq: React.FC = () => {
  return (
    <>
      <div className="faq-area pt-100">
        <div className="container">
          <div className="section-title">
          
            <h2>معلومات مهمة</h2>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="faq-accordion">
                <Accordion preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      ما هي أعراض الأعطال الشائعة في الثلاجات؟
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p>
                      من الأعراض الشائعة في الثلاجات: عدم تبريد الطعام بشكل جيد، وجود صوت غير طبيعي، تراكم الثلج في الفريزر، أو تسرب المياه أسفل الثلاجة. قد تشير هذه المشكلات إلى خلل في محرك الكمبريسور، الفلاتر أو التسريبات
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      كيف يمكنني التأكد من أن غسالتي بحاجة إلى صيانة؟
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p>
                      إذا كانت الغسالة لا تدور بشكل صحيح، أو إذا لاحظت تسرب المياه أو أصوات غريبة أثناء التشغيل، أو إذا توقفت عن العمل تمامًا، فقد تحتاج إلى صيانة فنية. أيضًا، إذا كانت هناك مشاكل في تصريف المياه أو في درجة نظافة الملابس بعد الغسيل
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      كم من الوقت يستغرق إصلاح الثلاجة أو الغسالة؟
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      يعتمد وقت الإصلاح على نوع العطل ومدى تعقيده. في الحالات البسيطة، قد يتم الإصلاح في نفس اليوم، بينما قد تتطلب الأعطال المعقدة مثل استبدال الأجزاء التالفة أو إجراء فحوصات شاملة بضعة أيام
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      هل تقدمون ضمانًا على خدمات الصيانة؟
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      نعم، نحن نقدم ضمانًا على خدمات الصيانة التي نقوم بها وعلى الأجزاء المستبدلة، مما يضمن لك راحة البال واستمرارية أداء جهازك بكفاءة بعد الإصلاح
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      كيف يمكنني طلب خدمة صيانة لأجهزتي؟
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      يمكنك بسهولة طلب خدمة صيانة عبر موقعنا الإلكتروني أو الاتصال بأرقام خدمة العملاء الخاصة بنا. سيقوم فريقنا بتحديد موعد مناسب لك لإجراء الصيانة بأسرع وقت ممكن
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="faq-img">
                <Image src={faqImg} alt="Image" width={360} height={465} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
