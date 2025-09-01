import { ActionIcon, Badge, Button, Card, Group, Image, Text } from '@mantine/core';
import classes from '../styles/BadgeCard.module.css';

export function BadgeCard({ image, title, description, badges }) {
  const features = badges.map((badge) => (
    <Badge variant="light" key={badge.label} leftSection={badge.emoji}>
      {badge.label}
    </Badge>
  ));

  return (
    <Card className={classes.card}>
      <Card.Section>
        <Image src={image} alt={title} height={180} />
      </Card.Section>
      <Card.Section className={classes.section} mt="md">
        <Group justify="apart">
          <Text fz="lg" fw={500} style={{ fontFamily: "Roboto" }}>
            {title}
          </Text>
        </Group>
        <Text fz="lg" mt="xs" style={{ fontFamily: "Roboto" }}>
          {description}
        </Text>
      </Card.Section>
      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} c="dimmed">
          Tech Stack
        </Text>
        <Group gap={7} mt={5}>
          {features}
        </Group>
      </Card.Section>
    </Card>
  );
}
