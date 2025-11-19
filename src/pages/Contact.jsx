import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import PageTitle from '../components/layout/PageTitle';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, on pourrait intégrer un service d'envoi d'email
    console.log('Form submitted:', formData);
    alert(t('contact_page.form.success'));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t('contact_page.contact_info.email_info.title'),
      content: 'info@evalix.be',
      description: t('contact_page.contact_info.email_info.description')
    },
    {
      icon: Phone,
      title: t('contact_page.contact_info.phone_info.title'),
      content: '',
      description: t('contact_page.contact_info.phone_info.description')
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <PageTitle pageKey="contact" />
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          {t('contact_page.title')}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {t('contact_page.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">{t('contact_page.form.send_message_title')}</CardTitle>
            <CardDescription>
              {t('contact_page.form.send_message_description')}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{t('contact_page.form.name')} *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder={t('contact_page.form.your_name')}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{t('contact_page.form.email')} *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder={t('contact_page.form.your_email')}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company">{t('contact_page.form.company')}</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder={t('contact_page.form.company_name')}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">{t('contact_page.form.phone')}</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={t('contact_page.form.phone_placeholder')}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">{t('contact_page.form.subject')} *</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder={t('contact_page.form.subject_placeholder')}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{t('contact_page.form.message')} *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder={t('contact_page.form.message_placeholder')}
                  rows={6}
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                <Send className="h-4 w-4 mr-2" />
                {t('contact_page.form.send')}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              {t('contact_page.contact_info.title')}
            </h2>

            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            {info.title}
                          </h3>
                          <p className="text-foreground font-medium">
                            {info.content}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* FAQ Section */}
          <Card>
            <CardHeader>
              <CardTitle>{t('contact_page.faq.title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  {t('contact_page.faq.q1.title')}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t('contact_page.faq.q1.answer')}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  {t('contact_page.faq.q2.title')}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t('contact_page.faq.q2.answer')}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  {t('contact_page.faq.q3.title')}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t('contact_page.faq.q3.answer')}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16 bg-muted/50 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-foreground mb-4">
          {t('contact_page.cta.title')}
        </h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          {t('contact_page.cta.subtitle')}
        </p>
      </div>
    </div>
  );
};

export default Contact;