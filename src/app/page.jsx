import { ActionIcon, alpha, Anchor, Box, Button, Container, Grid, GridCol, Group, HoverCard, HoverCardDropdown, HoverCardTarget, Image, Paper, SimpleGrid, Stack, Text, ThemeIcon, Title, UnstyledButton } from "@mantine/core";
import { IconArrowRight, IconChevronDown, IconHeadset, IconRocket, IconShieldCheck, IconUser } from "@tabler/icons-react";
import { useTranslations } from 'next-intl';
import { FaDiscord } from "react-icons/fa6";
import { blogPosts } from "../../config/blogs";
import { settings } from "../../config/settings";
import { homePlans } from "../../data/plans/home";
import FadeInOnScroll from "../components/Framer/FadeInOnScroll";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import PricingTable from "../components/PricingTable";
import ReviewsCarousel from "../components/ReviewsCarousel";
import Link from "../components/Utils/Link";

export const metadata = {
  title: settings.company_name,
  description: 'Your trusted provider of premium hosting solutions. Explore our wide range of services designed to meet your needs.',
  openGraph: {
    title: settings.company_name,
    description: 'Your trusted provider of premium hosting solutions. Explore our wide range of services designed to meet your needs.',
  }
}

export default function HomePage() {
  const t = useTranslations('Home');

  return (
    <div>
      <Box my="6rem">
        <Hero promoText={settings.home_page_promotion.enabled ? t('hero.promoText') : null} promoLink={settings.home_page_promotion.link} title={<Title lh={1.2} fz={{ base: "2.4rem", md: "3.4rem" }} ta="center" c="bright">
          {t('hero.title.1')}<Text inherit c="primary">{t('hero.title.2')}</Text>
        </Title>} description={t('hero.description')}>
          <Group justify="center">
            <Button size="md" h="3rem" variant="magic" component={Anchor} href="/#pricing">{t('hero.viewPricing')}</Button>
            <HoverCard>
              <HoverCardTarget>
                <Button size="md" h="3rem" variant="plain" component={Anchor} href="/#pricing" rightSection={<IconChevronDown size="1rem" />}>{t('hero.ourServices')}</Button>
              </HoverCardTarget>
              <HoverCardDropdown classNames={{ dropdown: "paper" }}>
                <SimpleGrid w="37rem" cols={2} spacing="0.4rem">
                  {settings.navbar_dropdown_items.map((service) => (
                    <UnstyledButton component={Link} href={service.href} className="navbar__dropdown-item" key={service.title}>
                      <Group wrap="nowrap" align="flex-start">
                        <ThemeIcon size={34} variant="default" radius="md">
                          <service.icon size="1rem" />
                        </ThemeIcon>
                        <div>
                          <Text c="bright" size="sm" fw={500}>
                            {t(`services.${service.title}.title`)}
                          </Text>
                          <Text size="xs" c="dimmed">
                            {t(`services.${service.title}.description`)}
                          </Text>
                        </div>
                      </Group>
                    </UnstyledButton>
                  ))}
                </SimpleGrid>
              </HoverCardDropdown>
            </HoverCard>
          </Group>
        </Hero>

        <Container mt="4rem">
          {settings.hero_panel_image.visible && (
            <FadeInOnScroll>
              <Paper mb="4rem" p="0.6rem" bg="primary">
                <Image darkHidden style={{ userSelect: "none" }} src={settings.hero_panel_image.light} alt={t('hero.description')} w="100%" h="auto" />
                <Image lightHidden style={{ userSelect: "none" }} src={settings.hero_panel_image.dark} alt={t('hero.description')} w="100%" h="auto" />
              </Paper>
            </FadeInOnScroll>
          )}

          {settings.partners_visible && <FadeInOnScroll><Partners /></FadeInOnScroll>}

          <FadeInOnScroll>
            <Grid className="homepage__features">
              <GridCol span={{ base: 12, md: 8 }}>
                <SimpleGrid mih="30rem" cols={{ base: 1, xs: 2 }}>
                  <Paper className="hover" p="2rem" h="100%">
                    <Stack>
                      <ThemeIcon bg="primary" size="3.2rem" radius={10}>
                        <IconRocket size="1.6rem" />
                      </ThemeIcon>
                      <Title fz="1.4rem" order={2}>{t('updates.feature1.title')}</Title>
                      <Text size="lg" c="dimmed">{t('updates.feature1.description')}</Text>
                    </Stack>
                  </Paper>
                  <Paper className="hover" p="2rem" h="100%">
                    <Stack>
                      <ThemeIcon bg="primary" size="3.2rem" radius={10}>
                        <IconShieldCheck size="1.6rem" />
                      </ThemeIcon>
                      <Title fz="1.4rem" order={2}>{t('updates.feature2.title')}</Title>
                      <Text size="lg" c="dimmed">{t('updates.feature2.description')}</Text>
                    </Stack>
                  </Paper>
                  <Paper className="hover" p="2rem" h="100%">
                    <Stack>
                      <ThemeIcon bg="primary" size="3.2rem" radius={10}>
                        <IconUser size="1.6rem" />
                      </ThemeIcon>
                      <Title fz="1.4rem" order={2}>{t('updates.feature3.title')}</Title>
                      <Text size="lg" c="dimmed">{t('updates.feature3.description')}</Text>
                    </Stack>
                  </Paper>
                  <Paper className="hover" p="2rem" h="100%">
                    <Stack>
                      <ThemeIcon bg="primary" size="3.2rem" radius={10}>
                        <IconHeadset size="1.6rem" />
                      </ThemeIcon>
                      <Title fz="1.4rem" order={2}>{t('updates.feature4.title')}</Title>
                      <Text size="lg" c="dimmed">{t('updates.feature4.description')}</Text>
                    </Stack>
                  </Paper>
                </SimpleGrid>
              </GridCol>
              <GridCol span={{ base: 12, md: 4 }}>
                <Paper className="hover" mih="34.2rem" style={{ overflow: "hidden" }} pos="relative" p="2rem" h="30rem">
                  <Title mb="1rem" fz="1.4rem" order={2}>{t('experience.title')}</Title>
                  <Text mb="2rem" size="lg" c="dimmed">{t('experience.description')}</Text>
                  <Anchor target="_blank" c="primary" component={Link} td="none" href="/knowledgebase">
                    <Group>
                      <Text fw={600}>{t('experience.knowledgebase')}</Text>
                      <IconArrowRight size="1.2rem" />
                    </Group>
                  </Anchor>
                  <Image pos="absolute" bottom={{ base: "-3.6rem", xs: "-7rem", sm: "-14rem", md: "-4rem" }} left="2rem" w="100%" h="auto" src={settings.bento_grid_image} alt={settings.bento_grid_image_alt} />
                </Paper>
              </GridCol>
            </Grid>
            <Group mb="6rem" mt="2rem">
              <Button component={Link} href={settings.billing_url} target="_blank" size="lg" variant="plain">{t('features.orderService')}</Button>
              <Button component={Link} href="/blog" size="lg" variant="subtle">{t('features.visitBlog')}</Button>
            </Group>
          </FadeInOnScroll>
        </Container>

        <FadeInOnScroll>
          <Stack align="center">
            <Title order={2} ta="center" mt="4rem" fz={{ base: "2rem", md: "3rem" }}>{t('selectPlan.title')}</Title>
            <Text c="dimmed" ta="center" maw="40rem" size="lg">
              {t('selectPlan.description')}
            </Text>
          </Stack>
          <div id="pricing" className="pricing_section">
            <Container>
              <PricingTable withBudgetSwitcher data={homePlans} />
            </Container>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <Container>
            <Grid gutter="4rem" align="center" my="8rem">
              <GridCol span={{ base: 12, sm: 6, md: 5 }}>
                <Paper p={{ base: "1rem", sm: "2rem" }} w="100%" pb="12rem" className="globe_paper">
                  <Stack>
                    <Text fz="1.4rem" fw={600} c={alpha("var(--mantine-color-bright)", 0.8)}>{t('needSomethingElse.1')}</Text>
                    <Text fz="1.4rem" fw={600} c={alpha("var(--mantine-color-bright)", 0.6)}>{t('needSomethingElse.2')}</Text>
                    <Text fz="1.4rem" fw={600} c={alpha("var(--mantine-color-bright)", 0.4)}>{t('needSomethingElse.3')}</Text>
                    <Text fz="1.4rem" fw={600} c={alpha("var(--mantine-color-bright)", 0.2)}>{t('needSomethingElse.4')}</Text>
                  </Stack>
                </Paper>
              </GridCol>
              <GridCol span={{ base: 12, sm: 6, md: 7 }}>
                <Title mb="1.4rem" maw="26rem" fz="1.8rem" order={2}>{t('needSomethingElse.title')}</Title>

                <Text mb="1.4rem" size="lg">{t('needSomethingElse.description1')}.</Text>

                <Text mb="1.4rem" size="lg">
                  {t('needSomethingElse.description2')}
                </Text>
                <Button component={Link} href={settings.socials.other.discord.link} target="_blank" variant="plain" size="lg">{t('needSomethingElse.button')}</Button>
              </GridCol>
            </Grid>
          </Container>
        </FadeInOnScroll>

        {settings.reviews_visible && <FadeInOnScroll><ReviewsCarousel /></FadeInOnScroll>}

        <Container>
          <FadeInOnScroll>
            <Title mb="2rem" order={2} ta="center" mt="8rem" fz={{ base: "2.8rem", md: "2.4rem" }}>{t('blog.title')}</Title>
            <Grid mb="2rem">
              {blogPosts.filter(blog => settings.home_page_blogs.includes(blog.id)).map((blog, index) => (
                <GridCol span={{ base: 12, xs: 6, md: 4 }} key={index}>
                  <Link href={blog.link} target="_blank">
                    <Paper className="hover" p="1rem">
                      <Stack gap={0} justify="space-between" mih="30rem">
                        <div>
                          <Image mb="1rem" src={blog.image} alt={blog.title} />
                          <Text fw={500} c="bright" my="0.6rem" fz="1.4rem" order={2}>{blog.title}</Text>
                          <Text lineClamp={2} c="dimmed">{blog.description}</Text>
                        </div>
                        <Group gap="0.8rem" mt="2rem">
                          <Text size="lg">{t('blog.readPost')}</Text>
                          <IconArrowRight size="1.2rem" />
                        </Group>
                      </Stack>
                    </Paper>
                  </Link>
                </GridCol>
              ))}
            </Grid>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <Paper className="globe_paper_large" p={{ base: "2rem 1rem", sm: "4rem 2rem" }}>
              <Title mb="1rem" order={2} fz={{ base: "2rem", md: "2.4rem" }}>{t('needSomethingElseFooter.title')}</Title>
              <Text c="dimmed" maw="40rem" mb="1rem" size="lg">{t('needSomethingElseFooter.description')}</Text>
              <Group maw="20rem" gap="0.4rem" wrap="nowrap">
                <Button style={{ borderRadius: "15px 6px 6px 15px" }} leftSection={<FaDiscord />} size="xl" my="1rem" fullWidth component={Link} href={settings.socials.other.discord.link} target="_blank" fz={{ base: "1rem", xs: "1.2rem" }} variant="plain">{t('needSomethingElseFooter.discord')}</Button>
                <ActionIcon c="bright" component={Link} href={settings.create_ticket_url} target="_blank" style={{ borderRadius: "6px 15px 15px 6px" }} size="3.7rem" variant="plain">
                  <IconHeadset size="1.4rem" />
                </ActionIcon>
              </Group>
            </Paper>
          </FadeInOnScroll>
        </Container>
      </Box>
    </div>
  );
}